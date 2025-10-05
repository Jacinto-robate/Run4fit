"use client"

import { useState } from "react"
import { Play, X, ChevronLeft, ChevronRight, Images, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/galeria/6.jpg",
    alt: "Academia moderna com equipamentos de última geração",
    title: "Área de Musculação",
  },
  {
    id: 2,
    type: "video",
    src: "/galeria/1.MP4",
    thumbnail: "/galeria/10.jpg",
    alt: "Aula de fitness em ação",
    title: "Aulas em Grupo",
  },
  {
    id: 4,
    type: "video",
    src: "/galeria/9.mp4",
    thumbnail: "/galeria/9.jpg",
    alt: "Área de treinamento funcional",
    title: "Treinamento Funcional",
  },
  {
    id: 5,
    type: "video",
    src: "/galeria/7.MP4",
    thumbnail: "/galeria/12.jpg",
    alt: "Sessão de personal training",
    title: "Personal Training",
  },
  {
    id: 10,
    type: "video",
    src: "/galeria/4.mp4",
    thumbnail: "/galeria/13.webp",
    alt: "Aula de spinning com atmosfera energética",
    title: "Spinning",
  },
]

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFullGallery, setShowFullGallery] = useState(false)

  const displayedItems = galleryItems.slice(0, 6)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setSelectedItem(galleryItems[index].id)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const openFullGallery = () => {
    setShowFullGallery(true)
  }

  const closeFullGallery = () => {
    setShowFullGallery(false)
  }

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setCurrentIndex(nextIndex)
    setSelectedItem(galleryItems[nextIndex].id)
  }

  const prevItem = () => {
    const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedItem(galleryItems[prevIndex].id)
  }

  const renderMedia = (item: (typeof galleryItems)[0], className: string) => {
    if (item.type === "video") {
      return (
        <video className={className} poster={item.thumbnail} controls preload="metadata">
          <source src={item.src || "/placeholder.svg"} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      )
    }
    return <img src={item.src || "/placeholder.svg"} alt={item.alt} className={className} />
  }

  const renderThumbnail = (item: (typeof galleryItems)[0], className: string) => {
    const thumbnailSrc = item.type === "video" ? item.thumbnail || item.src : item.src
    return <img src={thumbnailSrc || "/placeholder.svg"} alt={item.alt} className={className} />
  }

  return (
    <section id="galeria" className="py-10 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossa <span className="text-red-500">Academia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça nossas instalações premium e veja nossos alunos em ação. Equipamentos de última geração em um
            ambiente motivador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-video relative">
                {renderThumbnail(
                  item,
                  "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play button for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500/90 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={openFullGallery}
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            <Images className="w-5 h-5 mr-2" />
            Ver mais
            <span className="ml-2 text-sm opacity-80">(+{galleryItems.length} mídias)</span>
          </Button>
        </div>

        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-red-500 z-10"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 z-10"
                onClick={prevItem}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 z-10"
                onClick={nextItem}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800">
                {renderMedia(galleryItems[currentIndex], "w-full h-auto max-h-[70vh] object-contain")}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{galleryItems[currentIndex].title}</h3>
                  <p className="text-gray-300">{galleryItems[currentIndex].alt}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showFullGallery && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto">
            <div className="min-h-screen p-4">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 mb-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Grid3X3 className="w-8 h-8 text-red-500" />
                    <div>
                      <h2 className="text-2xl font-bold text-white">Galeria Completa</h2>
                      <p className="text-gray-400">{galleryItems.length} fotos e vídeos</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-red-500"
                    onClick={closeFullGallery}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Full Gallery Grid */}
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {galleryItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        setShowFullGallery(false)
                        openModal(index)
                      }}
                    >
                      <div className="aspect-square relative">
                        {renderThumbnail(
                          item,
                          "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Play button for videos */}
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-red-500/90 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                              <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                            </div>
                          </div>
                        )}

                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                        </div>

                        {/* Item number */}
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-white text-xs font-medium">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Close button at bottom */}
                <div className="text-center mt-12 pb-8">
                  <Button
                    onClick={closeFullGallery}
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
                  >
                    <X className="w-5 h-5 mr-2" />
                    Fechar Galeria
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  )
}