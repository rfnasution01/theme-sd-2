import Loading from '@/components/Loading'
import { Slider1 } from '@/components/slider/slider-1'
import { BerandaBerita } from '@/features/beranda'
import { SliderType } from '@/libs/types/beranda-type'
import { useGetSliderQuery } from '@/store/slices/berandaAPI'
import { useEffect, useState } from 'react'

export default function Beranda() {
  const [slider, setSlider] = useState<SliderType[]>([])
  const {
    data: sliderData,
    isFetching: isFetchingData,
    isLoading: isLoadingData,
  } = useGetSliderQuery()

  const loading = isFetchingData || isLoadingData

  useEffect(() => {
    if (sliderData?.data) {
      setSlider(sliderData?.data)
    }
  }, [sliderData?.data])

  return (
    <div className="flex h-full w-full flex-col gap-32">
      {loading ? <Loading /> : <Slider1 listImage={slider} isShadow />}
      <BerandaBerita />
    </div>
  )
}
