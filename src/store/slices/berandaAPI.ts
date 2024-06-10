import {
  BerandaType,
  HalamanDetailType,
  IdentitasType,
  MenuType,
  ProgramDetailType,
  SliderType,
} from '@/libs/types/beranda-type'
import { Res, api } from '../api'

export const BerandaEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getIdentitas: builder.query<Res<IdentitasType>, void>({
      query: () => ({
        url: `website/identitas`,
        method: 'GET',
      }),
    }),
    getMenuUtama: builder.query<Res<MenuType[]>, void>({
      query: () => ({
        url: `website/menu_utama`,
        method: 'GET',
      }),
    }),
    getMenuTop: builder.query<Res<MenuType[]>, void>({
      query: () => ({
        url: `website/menu_top`,
        method: 'GET',
      }),
    }),
    getSlider: builder.query<Res<SliderType[]>, void>({
      query: () => ({
        url: `website/slider`,
        method: 'GET',
      }),
    }),
    getBeranda: builder.query<Res<BerandaType[]>, void>({
      query: () => ({
        url: `website/beranda`,
        method: 'GET',
      }),
    }),
    getHalamanDetail: builder.query<Res<HalamanDetailType>, { id: string }>({
      query: ({ id }) => ({
        url: `website/halaman`,
        method: 'GET',
        params: {
          id: id,
        },
      }),
    }),
    getProgramDetail: builder.query<Res<ProgramDetailType>, { id: string }>({
      query: ({ id }) => ({
        url: `website/program/detail`,
        method: 'GET',
        params: {
          id: id,
        },
      }),
    }),
  }),
})

export const {
  useGetIdentitasQuery,
  useGetMenuTopQuery,
  useGetMenuUtamaQuery,
  useGetSliderQuery,
  useGetHalamanDetailQuery,
  useGetBerandaQuery,
  useGetProgramDetailQuery,
} = BerandaEndpoints
