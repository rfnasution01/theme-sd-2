import Loading from '@/components/Loading'
import { BerandaType } from '@/libs/types/beranda-type'
import { useGetBerandaQuery } from '@/store/slices/berandaAPI'
import { useEffect, useState } from 'react'
import { ShowCard } from './berita-card'
import { NoData } from '@/components/NoData'

export function BerandaBerita() {
  const [beranda, setBeranda] = useState<BerandaType[]>([])
  const { data, isFetching, isLoading } = useGetBerandaQuery()

  const loading = isFetching || isLoading

  useEffect(() => {
    if (data?.data) {
      setBeranda(data?.data)
    }
  }, [data?.data])

  return (
    <div className="flex flex-col gap-32 px-64 phones:px-32">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-32">
          {beranda?.length > 0 ? (
            beranda?.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-32">
                <ShowCard angka={idx} data={item} />{' '}
              </div>
            ))
          ) : (
            <NoData />
          )}
        </div>
      )}
    </div>
  )
}
