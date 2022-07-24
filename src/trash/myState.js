import { CATEGORIES, CATEGORIES_FEATURED_IMAGE } from 'vars'
import { capitalize, lowerCase } from '../assets/utils'

export const myState = {
  posts: [
    {
      id: 1,
      slug: 'the-sun',
      title: 'The Sun',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[1], CATEGORIES[3]],
    },
    {
      id: 2,
      slug: 'button',
      title: 'Button',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[1], CATEGORIES[2]],
    },
    {
      id: 3,
      slug: 'button-group',
      title: 'Button group',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[2], CATEGORIES[3]],
    },
    {
      id: 4,
      slug: 'checkbox',
      title: 'Checkbox',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[1]],
    },
    {
      id: 5,
      slug: 'floating-action-button',
      title: 'Floating action button',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[4], CATEGORIES[3]],
    },
    {
      id: 6,
      slug: 'radio-button',
      title: 'Radio button',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[5], CATEGORIES[2]],
    },
    {
      id: 7,
      slug: 'rating',
      title: 'Rating',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[4], CATEGORIES[5], CATEGORIES[1]],
    },
    {
      id: 8,
      slug: 'select',
      title: 'Select',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[4]],
    },
    {
      id: 9,
      slug: 'slider',
      title: 'Slider',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[3], CATEGORIES[4]],
    },
    {
      id: 10,
      slug: 'switch',
      title: 'Switch',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[5]],
    },
    {
      id: 11,
      slug: 'text-field',
      title: 'Text field',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[2]],
    },
    {
      id: 12,
      slug: 'transfer-list',
      title: 'Transfer list',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[4]],
    },
    {
      id: 13,
      slug: 'toggle-button',
      title: 'Toggle button',
      date: new Date().toUTCString(),
      authors: [1],
      categories: [CATEGORIES[2], CATEGORIES[5]],
    },
    {
      id: 14,
      slug: 'avatar',
      title: 'Avatar',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [CATEGORIES[3], CATEGORIES[4]],
    },
    {
      id: 15,
      slug: 'badge',
      title: 'Badge',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [CATEGORIES[2], CATEGORIES[1]],
    },
    {
      id: 16,
      slug: 'chip',
      title: 'Chip',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [CATEGORIES[1], CATEGORIES[4]],
    },
    {
      id: 17,
      slug: 'divider',
      title: 'Divider',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [CATEGORIES[2]],
    },
    {
      id: 18,
      slug: 'icons',
      title: 'Icons',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [CATEGORIES[2]],
    },
    {
      id: 19,
      slug: 'material-icons',
      title: 'Material Icons',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [CATEGORIES[2]],
    },
    {
      id: 20,
      slug: 'list',
      title: 'List',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [CATEGORIES[2]],
    },
    {
      id: 21,
      slug: 'table',
      title: 'Table',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [1],
    },
    {
      id: 22,
      slug: 'tooltip',
      title: 'Tooltip',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [1],
    },
    {
      id: 23,
      slug: 'typography',
      title: 'Typography',
      date: 'Sun, 26 Jun 2022 06:26:28 GMT',
      authors: [1],
      categories: [1],
    },
    {
      id: 24,
      slug: 'alert',
      title: 'Alert',
      date: 'Sun, 26 Jun 2022 06:33:35 GMT',
      authors: [1],
      categories: [2],
    },
    {
      id: 25,
      slug: 'backdrop',
      title: 'Backdrop',
      date: 'Sun, 26 Jun 2022 06:33:35 GMT',
      authors: [1],
      categories: [2],
    },
    {
      id: 26,
      slug: 'dialog',
      title: 'Dialog',
      date: 'Sun, 26 Jun 2022 06:33:35 GMT',
      authors: [1],
      categories: [2],
    },
    {
      id: 27,
      slug: 'progress',
      title: 'Progress',
      date: 'Sun, 26 Jun 2022 06:33:35 GMT',
      authors: [1],
      categories: [2],
    },
    {
      id: 28,
      slug: 'skeleton',
      title: 'Skeleton',
      date: 'Sun, 26 Jun 2022 06:33:35 GMT',
      authors: [1],
      categories: [2],
    },
    {
      id: 29,
      slug: 'snackbar',
      title: 'Snackbar',
      date: 'Sun, 26 Jun 2022 06:33:35 GMT',
      authors: [1],
      categories: [2],
    },
    {
      id: 30,
      slug: 'accordion',
      title: 'Accordion',
      date: 'Sun, 26 Jun 2022 06:35:59 GMT',
      authors: [1],
      categories: [3],
    },
    {
      id: 31,
      slug: 'app-bar',
      title: 'App Bar',
      date: 'Sun, 26 Jun 2022 06:35:59 GMT',
      authors: [1],
      categories: [3],
    },
    {
      id: 32,
      slug: 'card',
      title: 'Card',
      date: 'Sun, 26 Jun 2022 06:35:59 GMT',
      authors: [1],
      categories: [3],
    },
    {
      id: 33,
      slug: 'paper',
      title: 'Paper',
      date: 'Sun, 26 Jun 2022 06:35:59 GMT',
      authors: [1],
      categories: [3],
    },
    {
      id: 34,
      slug: 'bottom-navigation',
      title: 'Bottom Navigation',
      date: 'Sun, 26 Jun 2022 06:38:51 GMT',
      authors: [1],
      categories: [4],
    },
    {
      id: 35,
      slug: 'breadcrumbs',
      title: 'Breadcrumbs',
      date: 'Sun, 26 Jun 2022 06:38:51 GMT',
      authors: [1],
      categories: [4],
    },
    {
      id: 36,
      slug: 'drawer',
      title: 'Drawer',
      date: 'Sun, 26 Jun 2022 06:38:51 GMT',
      authors: [1],
      categories: [4],
    },
    {
      id: 37,
      slug: 'link',
      title: 'Link',
      date: 'Sun, 26 Jun 2022 06:38:51 GMT',
      authors: [1],
      categories: [4],
    },
    {
      id: 38,
      slug: 'menu',
      title: 'Menu',
      date: 'Sun, 26 Jun 2022 06:38:51 GMT',
      authors: [1],
      categories: [4],
    },
    {
      id: 39,
      slug: 'pagination',
      title: 'Pagination',
      date: 'Sun, 26 Jun 2022 06:38:51 GMT',
      authors: [1],
      categories: [4],
    },
    {
      id: 40,
      slug: 'speed-dial',
      title: 'Speed Dial',
      date: 'Sun, 26 Jun 2022 06:38:51 GMT',
      authors: [1],
      categories: [4],
    },
    {
      id: 41,
      slug: 'stepper',
      title: 'Stepper',
      date: 'Sun, 26 Jun 2022 06:38:51 GMT',
      authors: [1],
      categories: [4],
    },
    {
      id: 42,
      slug: 'tabs',
      title: 'Tabs',
      date: 'Sun, 26 Jun 2022 06:38:51 GMT',
      authors: [1],
      categories: [4],
    },
    {
      id: 43,
      slug: 'box',
      title: 'Box',
      date: 'Sun, 26 Jun 2022 06:41:00 GMT',
      authors: [1],
      categories: [5],
    },
    {
      id: 44,
      slug: 'container',
      title: 'Container',
      date: 'Sun, 26 Jun 2022 06:41:00 GMT',
      authors: [1],
      categories: [5],
    },
    {
      id: 45,
      slug: 'grid',
      title: 'Grid',
      date: 'Sun, 26 Jun 2022 06:41:00 GMT',
      authors: [1],
      categories: [5],
    },
    {
      id: 46,
      slug: 'stack',
      title: 'Stack',
      date: 'Sun, 26 Jun 2022 06:41:00 GMT',
      authors: [1],
      categories: [5],
    },
    {
      id: 47,
      slug: 'image-list',
      title: 'Image List',
      date: 'Sun, 26 Jun 2022 06:41:00 GMT',
      authors: [1],
      categories: [5],
    },
    {
      id: 48,
      slug: 'hidden',
      title: 'Hidden',
      date: 'Sun, 26 Jun 2022 06:41:00 GMT',
      authors: [1],
      categories: [5],
    },
    {
      id: 49,
      slug: 'click-away-listener',
      title: 'Click-away listener',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
    {
      id: 50,
      slug: 'css-baseline',
      title: 'CSS Baseline',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
    {
      id: 51,
      slug: 'modal',
      title: 'Modal',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
    {
      id: 52,
      slug: 'no-ssr',
      title: 'No SSR',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
    {
      id: 53,
      slug: 'popover',
      title: 'Popover',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
    {
      id: 54,
      slug: 'popper',
      title: 'Popper',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
    {
      id: 55,
      slug: 'portal',
      title: 'Portal',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
    {
      id: 56,
      slug: 'textarea-autosize',
      title: 'Textarea autosize',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
    {
      id: 57,
      slug: 'transitions',
      title: 'Transitions',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
    {
      id: 58,
      slug: 'usemediaquery',
      title: 'useMediaQuery',
      date: 'Sun, 26 Jun 2022 06:42:49 GMT',
      authors: [1],
      categories: [6],
    },
  ],
  categories: CATEGORIES.map((i, index) => ({
    id: index,
    name: capitalize(i),
    slug: lowerCase(i),
    img: CATEGORIES_FEATURED_IMAGE[index]
  })),
  authors: [
    {
      id: 1,
    },
  ],
  users: [
    {
      id: 1,
      firstName: 'Imri',
      lastName: 'Wainberg',
      dob: new Date('December 02, 1989 12:24:00'),
      password: 'abc123',
      userName: 'imrish',
      mail: 'imrish@gmail.com',
      role: 'ADMIN',
    },
  ],
}

export default myState
