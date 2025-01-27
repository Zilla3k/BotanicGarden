import { useState, useEffect } from 'react';

export function Gallery() {
  const [images, setImages] = useState([]);

  const access = import.meta.env.VITE_APP_ACCESS;
  const token = import.meta.env.VITE_APP_TOKEN;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${access}/media?fields=id,media_type,media_url,thumbnail_url,permalink,media_product_type&access_token=${token}`,
        );
        const data = await response.json();

        if (data.data) {
          const filteredImages = data.data
            .filter(
              (item) =>
                item.media_type === 'IMAGE' ||
                item.media_type === 'CAROUSEL_ALBUM' ||
                item.media_type === 'VIDEO', // Incluir vídeos também
            )
            .slice(0, 6);
          setImages(filteredImages);
        }
      } catch (error) {
        console.error('Erro ao buscar imagens do Instagram:', error);
      }
    };

    fetchImages();
  }, [access, token]);

  return (
    <>
      <h2 className="text-3xl font-bold text-center font-robotomono text-greendark mb-4 mt-20">
        Galeria
      </h2>
      <div className="flex flex-wrap justify-center gap-5 p-4 mr-60 ml-60">
        {images.map((media) => (
          <a
            key={media.id}
            href={media.permalink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {media.media_type === 'VIDEO' ? (
              <video
                controls
                className="w-[350px] object-cover rounded-lg"
                src={media.media_url}
              />
            ) : (
              <img
                src={media.media_url}
                alt="Instagram Post"
                className="w-[350px] object-cover rounded-lg cursor-pointer"
              />
            )}
          </a>
        ))}
      </div>
    </>
  );
}
