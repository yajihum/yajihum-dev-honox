import { useState } from 'hono/jsx';
import { HeroiconsSvgWrapper, SvgPaths } from '../components/icons';
import { navigationLinks } from '../components/layouts/Header/data';

type SideNavigationProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SideNavigation = ({ open, setOpen }: SideNavigationProps) => {
  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          onKeyUp={handleKeyUp}
          className='fixed inset-0 min-h-screen bg-black bg-opacity-30  z-20'
        />
      )}
      <nav
        class={`${
          open ? 'fixed translate-x-0' : 'hidden translate-x-full'
        } right-0 top-0 min-h-screen z-30 w-1/2 px-6 py-14 bg-neutral-900`}
      >
        <ul class='grid gap-10'>
          {navigationLinks.map((link) => (
            <li key={link.name} class='border-b border-neutral-500'>
              <a
                href={link.href}
                class='flex justify-between items-center w-full bg-inherit text-white px-0 py-2 hover:bg-inherit'
              >
                <div class='flex gap-2.5'>
                  <p class='text-right font-semibold'>{link.name}</p>
                </div>
                <HeroiconsSvgWrapper
                  className='h-5 w-5 text-emerald-400'
                  aria-label={`${link.name}へ遷移する`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 5l7 7-7 7'
                  />
                </HeroiconsSvgWrapper>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='flex justify-between items-center w-full bg-inherit text-white px-0 hover:bg-inherit'
        onClick={() => {
          setOpen(!open);
        }}
      >
        <HeroiconsSvgWrapper
          className='h-6 w-6 text-emerald-400'
          aria-label='メニューを開く'
        >
          {SvgPaths.humburger}
        </HeroiconsSvgWrapper>
      </button>
      <SideNavigation open={open} setOpen={setOpen} />
    </>
  );
}
