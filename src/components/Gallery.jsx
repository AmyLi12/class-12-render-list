import GalleryCard from './GalleryCard'

export default function Gallery() {
  const galleryItems = [
    {
      uri:"/images/galaxy.webp",
      altText:"an AI generated galaxy",
      caption:"A galaxy",
      citation:"Microsoft Copilot"
    }
  ]

  return (
    <div className="gallery">
      <GalleryCard
        imgUri="/images/galaxy.webp"
        altText="an AI generated galaxy"
        caption="A galaxy"
        citation="Microsoft Copilot"
      />
      <GalleryCard
        imgUri="/images/asteroid.webp"
        altText="an AI generated asteroid"
        caption="An asteroid"
        citation="Microsoft Copilot"
      />
      <GalleryCard
        imgUri="/images/black-hole.webp"
        altText="an AI generated black hole"
        citation="Microsoft Copilot"
        color="#e58c43"
      />
      <GalleryCard
        imgUri="/images/cloud-nebulae.webp"
        altText="an AI generated cloud nebulae"
        caption="Cloud nebulae"
        citation="Microsoft Copilot"
        color="#9ad2ea"
      />
      <GalleryCard
        imgUri="/images/distant-space.webp"
        altText="an AI generated distant space"
        citation="Microsoft Copilot"
      />
      <GalleryCard
        imgUri="/images/galaxy-collision.webp"
        altText="an AI generated galaxy collision"
        citation="Microsoft Copilot"
      />
      <GalleryCard
        imgUri="/images/moon.webp"
        altText="an AI generated moon"
        citation="Microsoft Copilot"
      />
      <GalleryCard
        imgUri="/images/pulsar.webp"
        altText="an AI generated pulsar"
        caption="A pulsar"
        citation="Microsoft Copilot"
        color="#d9b5ea"
      />
      <GalleryCard
        imgUri="/images/star-death.webp"
        altText="an AI generated star death"
        citation="Microsoft Copilot"
      />
      <GalleryCard
        imgUri="/images/sun.webp"
        altText="an AI generated sun"
        citation="Microsoft Copilot"
      />
    </div>
  )
}
