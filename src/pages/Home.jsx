import Before from "../assets/Group 6.png";
import After from "../assets/Group 7.png";
import logo from "../assets/main logo.svg";

const Home = () => {
	return (
		<div className='w-full h-full'>
			<div className='flex justify-center items-center w-full h-full flex-col lg:gap-24 gap-16 lg:py-16 py-8 sm:py-12'>
				<div className='flex justify-center items-center flex-col gap-16'>
					<div>
						<img src={logo} alt='Awaitable Logo' />
					</div>
					<div className='flex justify-center items-center flex-col'>
						<h1 className='2xl:max-w-[1150px] xl:max-w-[850px] sm:max-w-[550px] lg:max-w-[700px] tracking-tight xl:text-7xl text-[42px] sm:text-5xl lg:text-6xl 2xl:text-8xl mb-10 font-NeueMontrealMedium leading-[110%]'>
							All the Waitlists You’ve Joined, Finally in One Place
						</h1>
						<p className='lg:text-lg text-base xl:max-w-[740px] max-w-[620px] font-NeueMontreal text-[#444444]'>
							No more digging through emails or forgetting where you signed up.
							Awaitable automatically tracks your waitlists, monitors updates,
							and keeps your future invites in sight.
						</p>
					</div>
					<button className='h-12 capitalize bg-black text-white rounded-xl px-8 font-NeueMontreal'>
						{" "}
						Get Early Access to Awaitable
					</button>
				</div>

				<div className='flex md:flex-row gap-8 w-full flex-col'>
					<div>
						<div className='max-w-[600px] bg-[#f5f5f5] lg:px-24 lg:pt-24 px-12 pt-12 rounded-2xl w-full'>
							<img src={Before} width='100%' height='100%' />
						</div>
						<h2 className='mt-4 text-xl md:text-3xl lg:text-4xl font-NeueMontrealMedium'>
							Before Awaitable
						</h2>
					</div>
					<div>
						<div className='max-w-[600px] bg-[#f5f5f5] lg:px-24 lg:pt-24 px-12 pt-12 rounded-2xl w-full'>
							<img src={After} width='100%' height='100%' />
						</div>
						<h2 className='mt-4 text-xl md:text-3xl lg:text-4xl font-NeueMontrealMedium'>
							After Awaitable
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
