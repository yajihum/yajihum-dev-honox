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
          className='fixed inset-0 z-20 min-h-screen bg-black bg-opacity-30'
        />
      )}
      <nav
        class={`${
          open ? 'fixed translate-x-0' : 'hidden translate-x-full'
        }top-0 right-0 z-30 min-h-screen w-1/2 bg-neutral-200 px-6 py-14 dark:bg-neutral-900`}
      >
        <ul class='grid gap-10'>
          {navigationLinks.map((link) => (
            <li
              key={link.name}
              class='border-neutral-300 border-b dark:border-neutral-500'
            >
              <a
                href={link.href}
                class='flex w-full items-center justify-between bg-inherit px-0 py-2 text-neutral-600 hover:bg-inherit dark:text-white'
              >
                <div class='flex gap-2.5'>
                  <p class='text-right font-semibold'>{link.name}</p>
                </div>
                <HeroiconsSvgWrapper
                  className='h-5 w-5 text-green-500 text-green-300'
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

export default function IslandSideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='flex w-full items-center justify-between bg-inherit px-0 hover:bg-inherit'
        onClick={() => {
          setOpen(!open);
        }}
      >
        <HeroiconsSvgWrapper
          className='h-6 w-6 text-green-500 dark:text-green-300'
          aria-label='メニューを開く'
        >
          {SvgPaths.humburger}
        </HeroiconsSvgWrapper>
      </button>
      <SideNavigation open={open} setOpen={setOpen} />
    </>
  );
}
