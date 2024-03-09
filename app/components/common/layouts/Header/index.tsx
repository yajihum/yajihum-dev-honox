export default function Header() {
  return (
    <header className='sticky top-0 z-10 bg-neutral-900/60 py-2 backdrop-blur transition-colors border-b border-stone-800'>
      <div className='mx-auto flex max-w-3xl items-center justify-between px-4 md:px-0'>
        <a href='/' className='hover:underline'>
          <h2 className='flex items-center gap-1.5 text-lg font-bold md:items-end md:text-xl'>
            <img
              src='https://cdn.emoji.yajihum.dev/animals-and-nature/91.png'
              width='30'
              height='30'
              alt='恐竜の絵文字'
              className='inline-block h-5 w-5 md:h-6 md:w-6'
            />
            yajihum.dev
          </h2>
        </a>
        {/* <Navigation /> */}
      </div>
    </header>
  );
}
