<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Blog</h1>
    <div v-if="!selectedPost" class="space-y-4">
      <div v-for="post in posts" :key="post.slug">
        <button @click="openPost(post.slug)"
                class="text-xl font-semibold hover:underline text-blue-600">
          {{ post.title }}
        </button>
      </div>
    </div>
    <div v-else>
      <button @click="selectedPost = null" class="mb-4 text-blue-500 hover:underline">&larr; Back</button>
      <h2 class="text-2xl font-bold mb-2">{{ selectedPostTitle }}</h2>
      <div v-html="postContent" class="prose prose-invert max-w-none"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const selectedPost = ref(null)
const postContent = ref('')
const selectedPostTitle = ref('')

// Dynamically import all markdown files in /src/posts
const modules = import.meta.glob('../posts/*.md', { as: 'raw' })

onMounted(async () => {
  const postList = []
  for (const path in modules) {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const raw = await modules[path]()
    // Extract title from first heading
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
  // Extract title from first heading
  const titleMatch = md.match(/^#\s+(.*)$/m)
  selectedPostTitle.value = titleMatch ? titleMatch[1].trim() : slug
  // Optionally, strip the title from content
  const content = md.replace(/^#\s+.*$/m, '')
  // Use marked (or markdown-it) for parsing
  const { marked } = await import('marked')
  postContent.value = marked.parse(content)
}
</script>

<style scoped>
.prose {
  /* tailwind */
}
</style>
