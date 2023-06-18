import Socials from './Socials';

export default () => {

	return (
		<header class='mt-12 md:mt-18'>
			<h1 class='title text-4xl font-bold'>
				<span class='block mt-2'>I'm jokereven.</span>
			</h1>
			<div class='mt-6'>
				<div>
					<span>Front-end developer / Web3 developer.</span>
				</div>
				<div mt-2>
					<span>All is for consistent.</span>
				</div>
				<div mt-2>
					<span>Love all interesting things.</span>
				</div>
			</div>
			<Socials />
		</header>
	);
};
