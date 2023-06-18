import { Index, Show } from 'solid-js'

interface SocialProps {
  data: {
    icon: string
    link: string
    class: string
    text?: string
  }
}

const SocialItem = (props: SocialProps) => {
  const { data } = props
  return (
    <a
      class={`inline-flex px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none ${data.class} hover:text-white dark:bg-gray-50/10`}
      href={data.link}
      target="_blank"
    >
      <div text-xl>
        <div class={data.icon} />
      </div>
      <Show
        when={data.text}
      >
        <div text-sm ml-1>{ data.text }</div>
      </Show>
    </a>
  )
}

export default () => {
  const socialLists = [
    {
      text: 'Github',
      link: 'https://github.com/jokereven',
      icon: 'i-ri-github-fill',
      class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900'
    }, {
      text: 'Blog',
      link: 'https://blog.code520.com.cn',
      icon: 'i-ri-book-2-line',
      class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900'
    }, {
      text: '',
      link: 'https://twitter.com/cnzjing125',
      icon: 'i-fa-brands-twitter',
      class: 'hover:bg-[#748DA6]'
    }, {
      text: '',
      link: 'https://o3o.ca/@jokereven',
      icon: 'i-fa-brands-mastodon',
      class: 'hover:bg-[#9CB4CC]'
    }, {
      // instagram 审核
      text: '',
      link: 'https://www.instagram.com/jackineven',
      icon: 'i-fa-brands-instagram',
      class: 'hover:bg-gradient-to-r from-[#9CB4CC] to-[#D3CEDF]'
    }, {
      text: '',
      link: 'https://figma.com/@jokereven',
      icon: 'i-fa-brands-figma',
      class: 'hover:bg-[#D3CEDF]'
    }, {
      text: '',
      link: 'https://space.bilibili.com/2104605936',
      icon: 'i-ri-bilibili-fill',
      class: 'hover:bg-[#F2D7D9]'
    }
  ]

  return (
    <div mt-4>
      <Index each={socialLists}>
        {item => (
          <SocialItem data={item()} />
        )}
      </Index>
    </div>
  )
}
