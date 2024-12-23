import Container from "./Container"

const SkeletonLoaderGallery = () => {
  return (
    <Container className="grid lg:grid-cols-2 animate-pulse gap-x-8">
      <div className="w-full h-32 lg:h-96 bg-gray-200 rounded-md">

      </div>
      <div className="hidde: lg:block w-full h-56 lg:h-96 bg-gray-200 rounded-md">

      </div>
    </Container>
  )
}

export default SkeletonLoaderGallery