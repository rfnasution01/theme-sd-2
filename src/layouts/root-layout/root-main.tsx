import { useEffect, useState } from 'react'
import { RootHeader } from './root-header'
import { RootNavigasi } from './root-navigasi'
import { DoorClosed, DoorOpen, Search } from 'lucide-react'
import { RootFooter } from './root-footer'
import { Link, Outlet } from 'react-router-dom'
import { RootContentHeader } from './root-content-header'
import clsx from 'clsx'
import { usePathname } from '@/libs/hooks/usePathname'
import { MenuType } from '@/libs/types/beranda-type'
import {
  useGetMenuTopQuery,
  useGetMenuUtamaQuery,
} from '@/store/slices/berandaAPI'
import Loading from '@/components/Loading'
import { enumRoute } from '@/libs/enum/enum-route'

export function RootMain() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const { firstPathname } = usePathname()

  const contentWithoutGap = ['', 'Profil']

  // --- Menu Top ---
  const [menuUtama, setMenuUtama] = useState<MenuType[]>([])
  const {
    data: menuUtamaData,
    isLoading: isLoadingMenuUtama,
    isFetching: isFetchingMenuUtama,
  } = useGetMenuUtamaQuery()

  useEffect(() => {
    if (menuUtamaData?.data) {
      setMenuUtama(menuUtamaData?.data)
    }
  }, [menuUtamaData?.data])

  // --- Menu Top ---
  const [menuTop, setMenuTop] = useState<MenuType[]>([])
  const {
    data: menuTopData,
    isLoading: isLoadingMenuTop,
    isFetching: isFetchingMenuTop,
  } = useGetMenuTopQuery()

  useEffect(() => {
    if (menuTopData?.data) {
      setMenuTop(menuTopData?.data)
    }
  }, [menuTopData?.data])

  const loading =
    isLoadingMenuUtama ||
    isFetchingMenuUtama ||
    isLoadingMenuTop ||
    isFetchingMenuTop

  const sortedDataMenuTop = [...menuTop].sort((a, b) => {
    return parseInt(a.urutan) - parseInt(b.urutan)
  })
  const sortedDataMenuUtama = [...menuUtama].sort((a, b) => {
    return parseInt(a.urutan) - parseInt(b.urutan)
  })

  const isActivePage = (item: string) => {
    if (item?.toLocaleLowerCase() === firstPathname) {
      return true
    }
    return false
  }
  return (
    <div className="flex h-full w-full flex-col">
      {/* --- Header ---  */}
      <RootHeader setIsShow={setIsShow} isShow={isShow} />
      {/* --- Menu --- */}
      {isShow ? (
        <div className="flex h-full w-full flex-col gap-48 bg-primary-700 p-32 text-primary-100">
          {loading ? (
            <Loading />
          ) : (
            <div className="flex flex-col gap-16">
              {sortedDataMenuUtama.map((item, idx) => (
                <Link
                  onClick={() => {
                    setIsShow(false)
                  }}
                  to={
                    item?.nama_menu === 'Home'
                      ? '/'
                      : item?.jenis_menu === enumRoute.ROUTE
                        ? item?.slug
                        : item?.jenis_menu === enumRoute.HALAMAN
                          ? `/halaman?page=${item?.slug}`
                          : item?.jenis_menu === enumRoute.PROGRAM
                            ? `/program-details?page=${item?.slug}`
                            : item?.jenis_menu === enumRoute.BERITA
                              ? `/berita`
                              : item?.jenis_menu === enumRoute.AGENDA
                                ? `/agenda`
                                : item?.jenis_menu === enumRoute.PENGUMUMAN
                                  ? `/pengumuman`
                                  : item?.jenis_menu === enumRoute.PRESTASI
                                    ? `/prestasi`
                                    : item?.jenis_menu === enumRoute.URL
                                      ? item?.id_konten
                                      : item?.slug
                  }
                  target={
                    item?.jenis_menu === enumRoute.URL ? '_blank' : '_self'
                  }
                  className={clsx(
                    'border-l border-r border-primary-400 px-16 py-24 text-[2rem] uppercase hover:cursor-pointer hover:bg-primary-400 phones:text-[2.4rem]',
                    {
                      'bg-primary-400': isActivePage(item?.slug),
                    },
                  )}
                  key={idx}
                >
                  {item?.nama_menu}
                </Link>
              ))}
              {sortedDataMenuTop.map((item, idx) => (
                <Link
                  onClick={() => setIsShow(false)}
                  to={
                    item?.nama_menu === 'Home'
                      ? '/'
                      : item?.jenis_menu === enumRoute.ROUTE
                        ? item?.slug
                        : item?.jenis_menu === enumRoute.HALAMAN
                          ? `/halaman?page=${item?.slug}`
                          : item?.jenis_menu === enumRoute.PROGRAM
                            ? `/program-details?page=${item?.slug}`
                            : item?.jenis_menu === enumRoute.BERITA
                              ? `/berita`
                              : item?.jenis_menu === enumRoute.AGENDA
                                ? `/agenda`
                                : item?.jenis_menu === enumRoute.PENGUMUMAN
                                  ? `/pengumuman`
                                  : item?.jenis_menu === enumRoute.PRESTASI
                                    ? `/prestasi`
                                    : item?.jenis_menu === enumRoute.URL
                                      ? item?.id_konten
                                      : item?.slug
                  }
                  target={
                    item?.jenis_menu === enumRoute.URL ? '_blank' : '_self'
                  }
                  className={clsx(
                    'border-l border-r border-primary-400 px-16 py-24 text-[2rem] uppercase hover:cursor-pointer hover:bg-primary-400 phones:text-[2.4rem]',
                    {
                      'bg-primary-400': isActivePage(item?.slug),
                    },
                  )}
                  key={idx}
                >
                  {item?.nama_menu}
                </Link>
              ))}
              <div className="relative w-full text-black">
                <span className="">
                  <Search
                    className="absolute left-12 top-1/2 -translate-y-1/2 transform"
                    size={16}
                  />
                </span>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 bg-primary-100 p-8 px-48 text-[2rem] focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 phones:w-full phones:px-48"
                  placeholder="Tulis & Tekan Enter"
                />
              </div>
            </div>
          )}
          {/* --- Login --- */}
          <div className="flex flex-col gap-16">
            <button
              type="button"
              className="flex items-center justify-center gap-12 rounded-lg bg-green-700 py-12 text-[2.4rem]"
            >
              <DoorOpen size={16} /> Masuk
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-12 rounded-lg bg-red-700 py-12 text-[2.4rem]"
            >
              <DoorClosed size={16} /> Daftar
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="phones:hidden">
            <RootNavigasi />
          </div>
          <div
            className={clsx(
              'scrollbar flex h-full flex-1 flex-col gap-32 overflow-y-auto phones:gap-24',
              {
                'mt-32': !contentWithoutGap.includes(firstPathname),
              },
            )}
          >
            {/* --- Content --- */}
            <div className="flex flex-col">
              <RootContentHeader />
              <Outlet />
            </div>
            {/* --- Footer --- */}
            <RootFooter />
          </div>
        </>
      )}
    </div>
  )
}
