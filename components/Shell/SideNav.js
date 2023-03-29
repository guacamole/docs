import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Get started',
    links: [
      { href: '/docs/getting-started#sign-up', children: 'Sign-up/ Sign-in' },
      {
        href: '/docs/getting-started#using-docker-cli:',
        children: 'Using Docker CLI'
      },
      {
        href: '/docs/getting-started#push-an-image',
        children: 'Push an Image'
      },
      {
        href: '/docs/getting-started#pull-an-image',
        children: 'Pull an Image'
      },
      { href: '/docs/faq', children: 'FAQ' }
    ]
  },

  {
    title: 'Containers',
    links: [
      {
        href: '/docs/containers#what-are-containers-',
        children: 'What are containers'
      },
      {
        href: '/docs/containers#why-containers-and-how-do-they-work-',
        children: 'Why do we need containers'
      },
      {
        href: '/docs/containers#what-is-a-container-registry-',
        children: 'Container Registries'
      }
    ]
  },
  {
    title: 'Zines',
    links: [
      {
        href: '/docs/zines#understanding-containers',
        children: 'Understanding Containers'
      },
      {
        href: '/docs/zines#what-is-openregistry',
        children: 'What is OpenRegistry?'
      },
      {
        href: '/docs/zines#how-does-openregistry-work',
        children: 'How does it work?'
      },
      {
        href: '/docs/zines#why-do-we-need-another-container-registry',
        children: 'Why do we need this?'
      },
      // {
      //   href: '/docs/zines#why-do-we-need-another-container-registry',
      //   children: 'Pull a layer (Advance)'
      // },
      // {
      //   href: '/docs/zines#why-do-we-need-another-container-registry',
      //   children: 'Push a layer (Advance)'
      // }
    ]
  },
  {
    title: 'Collaborations',
    links: [
      { href: '/docs/collaboration', children: 'Akash Network' },
      { href: '/docs/collaboration', children: 'Inter Planetory File system' },
      { href: '/docs/collaboration', children: 'Storj' },
      { href: '/docs/collaboration', children: 'Filebase' },
      { href: '/docs/collaboration', children: 'iExec' }
    ]
  },

  {
    title: 'Change log',
    links: [{ href: '/docs/examples', children: 'Progress so far' }]
  },
  {
    title: 'Contact',
    links: [{ href: '/docs/contact', children: 'Contact us' }]
  }
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height));
            flex: 0 0 240px;
            overflow-y: auto;
            padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 0.7rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            border-radius: 3px;
            border: 1px solid var(--dark);
            padding: 4px 8px 4px 8px;
            background: var(--purple);
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
