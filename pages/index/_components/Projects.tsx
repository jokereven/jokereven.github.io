import { Index } from 'solid-js'
import ProjectItem from './ProjectItem'

export default () => {
  const projectLists = [
		{
			name: 'Netease Cloud Music',
			desc: 'Music player using React',
			link: 'https://github.com/jokereven/cloud-music',
			icon: 'i-fluent-emoji-flat-ghost',
		},
		{
			name: 'Hexo Blog',
			desc: 'One beasic Hexo blog',
			link: 'https://github.com/jokereven/hexo-themes-matery',
			icon: 'i-fluent-emoji-flat-newspaper',
		},
		{
			name: 'Low code platform',
			desc: 'An Low code using React',
			link: 'https://github.com/jokereven/2win19virus',
			icon: 'i-fluent-emoji-flat-control-knobs',
		},
    {
			name: 'My first nft',
			desc: 'Build you own nft in goerli test network',
			link: 'https://github.com/jokereven/my-first-nft',
			icon: 'i-fluent-emoji-flat-eight-spoked-asterisk',
		}
	];
  const openLink = () => {
    window.open('https://github.com/jokereven', '_blank')
  }
  return (
    <>
      <h2 class="flex items-center mt-14 mb-4 font-semibold text-2xl">
        <span flex-1 class="title">Projects</span>
        <div
          onClick={openLink}
          class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
        >
          <div class="m-2 i-ri-arrow-right-up-line" ></div>
        </div>
      </h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Index each={projectLists}>
          {item => (
            <ProjectItem data={item()} />
          )}
        </Index>
      </div>
    </>
  )
}
