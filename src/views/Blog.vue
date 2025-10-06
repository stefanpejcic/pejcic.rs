<template>
  <div>
    <h1>Blog</h1>
    <div v-if="!selectedPost">
      <div v-for="post in posts" :key="post.slug">
        <button @click="openPost(post.slug)">
          {{ post.title }}
        </button>
      </div>
    </div>
    <div v-else>
      <button @click="selectedPost = null">&larr; Back</button>
      <h2>{{ selectedPostTitle }}</h2>
      <div v-html="postContent"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const selectedPost = ref(null)
const postContent = ref('')
const selectedPostTitle = ref('')

const modules = import.meta.glob('../posts/*.md', { as: 'raw' })

onMounted(async () => {
  const postList = []
  for (const path in modules) {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const raw = await modules[path]()
    const titleMatch = raw.match(/^#\s+(.*)$/m)
    postList.push({
      slug,
      title: titleMatch ? titleMatch[1].trim() : slug
    })
  }
  posts.value = postList
})

async function openPost(slug) {
  selectedPost.value = slug
  const path = Object.keys(modules).find(p => p.includes(`/${slug}.md`))
  if (!path) {
    postContent.value = 'Post not found.'
    selectedPostTitle.value = ''
    return
  }
  const md = await modules[path]()
  const titleMatch = md.match(/^#\s+(.*)$/m)
  selectedPostTitle.value = titleMatch ? titleMatch[1].trim() : slug
  const content = md.replace(/^#\s+.*$/m, '')
  const { marked } = await import('marked')
  postContent.value = marked.parse(content)
}
</script>
