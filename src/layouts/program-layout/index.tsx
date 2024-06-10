import { Breadcrumb } from '@/components/Breadcrumb'
import Loading from '@/components/Loading'
import { ProgramDetailType } from '@/libs/types/beranda-type'
import { getHalamanSlice } from '@/store/reducer/stateIdHalaman'
import { useGetProgramDetailQuery } from '@/store/slices/berandaAPI'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function ProgramLayout() {
  const stateId = useSelector(getHalamanSlice)?.id

  useEffect(() => {
    if (stateId) {
      setId(stateId)
    }
  }, [stateId])

  const statePage = useSelector(getHalamanSlice)?.page

  useEffect(() => {
    if (statePage) {
      setPage(statePage)
    }
  }, [statePage])

  const searchParams = new URLSearchParams(location.search)
  const idParams = searchParams.get('id')
  const pageParams = searchParams.get('page')

  const [id, setId] = useState<string>(idParams ?? stateId ?? '')
  const [page, setPage] = useState<string>(pageParams ?? statePage ?? '')

  // --- Program Page ---
  const [program, setProgram] = useState<ProgramDetailType>()
  const { data, isLoading, isFetching } = useGetProgramDetailQuery({
    id: id,
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data?.data) {
      setProgram(data?.data)
    }
  }, [data?.data, id])

  return (
    <div className="flex h-full w-full flex-col gap-12">
      <Breadcrumb page={page} />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-32 px-64 phones:p-32">
          <p className="font-roboto text-[5rem]">{program?.judul}</p>
          <div className="h-[60vh] w-full">
            <img
              src={program?.photo}
              alt={program?.judul}
              className="h-full w-full"
              loading="lazy"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: program?.isi_lengkap }} />
        </div>
      )}
    </div>
  )
}
