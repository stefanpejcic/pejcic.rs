<template>
  <div class="flex flex-col gap-16 slg:gap-24">
    <div class="flex flex-col gap-5 slg:gap-12" v-if="!selectedPost">
      <h1 class="text-2xl sm:text-3xl md:text-4xl slg:text-5xl font-theme_bold text-head_text">
        Blog<span class="text-link_text_hover">.</span>
      </h1>
      <p class="text-base slg:text-lg">
        Here you'll find blog posts and updates. Click a title to read more!
      </p>
      <div class="flex flex-col mt-10 gap-8">
        <div v-for="post in posts" :key="post.slug" class="flex flex-col gap-1">
          <button
            class="font-theme_bold text-head_text text-lg text-left hover:underline"
            @click="openPost(post.slug)"
          >
            {{ post.title }}
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <button
        class="mb-8 text-link_text_hover font-theme_bold"
        @click="selectedPost = null"
      >
        &larr; Back to all posts
      </button>
      <h2 class="text-3xl font-theme_bold text-head_text mb-6">{{ selectedPostTitle }}</h2>
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
const modules = import.meta.glob('../posts/*.md', { as: 'raw' })

onMounted(async () => {
  const postList = []
  for (const path in modules) {
    if (typeof modules[path] === 'function') {
      const raw = await modules[path]()
      const titleMatch = raw.match(/^#\s+(.*)$/m)
      postList.push({
        slug: path.split('/').pop().replace(/\.md$/, ''),
        title: titleMatch ? titleMatch[1].trim() : 'Untitled'
      })
    } else {
      console.error('modules[path] is not a function:', path)
    }
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
