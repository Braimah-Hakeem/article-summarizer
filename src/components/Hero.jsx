
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <div className='logo_text'>
                Dev<span className='logo_splash'>26x</span>.
            </div>
            <button 
                type='button'
                onClick={() => window.open('https://github.com/Braimah-Hakeem')}
                className='black_btn'
            >
                Github
            </button>
        </nav>

        <h1 className="head_text">
            Summarize your articles with <br className="max-md:hidden"/>
            <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>

        <h2 className="desc">
            Say goodbye to information overload and time-consuming reading! This web tool 
            is  designed to simplify your article consumption experience. Whether you are 
            a busy professional, a student, or an avid news enthusiast, this tool will help 
            condense lengthy articles into concise summaries without compromising their core 
            message.
        </h2>
        
    </header>
  )
}

export default Hero