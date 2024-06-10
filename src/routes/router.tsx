import { createBrowserRouter } from 'react-router-dom'
import {
  BerandaPage,
  ComingSoonPage,
  HalamanLayout,
  LoginPage,
  ProgramLayout,
  RootLayout,
  TentangKamiPage,
} from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <BerandaPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'tentang-kami',
        element: <TentangKamiPage />,
      },
      {
        path: 'halaman',
        element: <HalamanLayout />,
      },
      {
        path: 'program-details',
        element: <ProgramLayout />,
      },
      {
        path: 'berita',
        element: <ComingSoonPage />,
      },
      {
        path: 'agenda',
        element: <ComingSoonPage />,
      },
      {
        path: 'pengumuman',
        element: <ComingSoonPage />,
      },
      {
        path: 'prestasi',
        element: <ComingSoonPage />,
      },
    ],
  },

  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
