'use client';

import { useCallback, useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import type { ListingImage } from '@/types/listing';

interface FileUploadProps {
  images: ListingImage[];
  onChange: (images: ListingImage[]) => void;
  maxFiles?: number;
  error?: string;
}

export function FileUpload({ 
  images, 
  onChange, 
  maxFiles = 4,
  error 
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;

    const newImages: ListingImage[] = [];
    const filesArray = Array.from(files);

    filesArray.slice(0, maxFiles - images.length).forEach((file, index) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage: ListingImage = {
            id: `${Date.now()}-${index}`,
            url: e.target?.result as string,
            file: file,
            isPrimary: images.length === 0 && index === 0,
          } as any;
          newImages.push(newImage);

          if (newImages.length === filesArray.slice(0, maxFiles - images.length).length) {
            onChange([...images, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }, [images, maxFiles, onChange]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const removeImage = (id: string) => {
    const filtered = images.filter(img => img.id !== id);
    onChange(filtered);
  };

  const setPrimaryImage = (id: string) => {
    const updated = images.map(img => ({
      ...img,
      isPrimary: img.id === id,
    }));
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer
          ${isDragging ? 'border-[#3CA997] bg-[#D7F4F0]/20' : 'border-[#E0E0E0] hover:border-[#3CA997]'}
          ${images.length >= maxFiles ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          id="file-upload"
          disabled={images.length >= maxFiles}
        />
        <label
          htmlFor="file-upload"
          className={`cursor-pointer ${images.length >= maxFiles ? 'cursor-not-allowed' : ''}`}
        >
          <Upload className="w-10 h-10 text-[#A8A2A2] mx-auto mb-3" strokeWidth={1.5} />
          <p className="text-[#11212D] font-hanken font-semibold mb-2">
            Upload Photos
          </p>
          <p className="text-sm text-[#A8A2A2] font-hanken mb-2">
            Drag and drop photos here, or click to select
          </p>
          <p className="text-xs text-[#A8A2A2] font-hanken">
            Maximum {maxFiles} photos, 5MB each
          </p>
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-500 font-hanken">{error}</p>
      )}

      {/* Image Previews */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {images.map((image) => (
            <div
              key={(image as any).id}
              className="relative group rounded-xl overflow-hidden border-2 border-[#E0E0E0] hover:border-[#3CA997] transition-all"
            >
              <div className="aspect-video relative">
                <img
                  src={(image as any).url}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  {!(image as any).isPrimary && (
                    <button
                      onClick={() => setPrimaryImage((image as any).id)}
                      className="px-3 py-1 bg-white text-[#11212D] text-xs font-hanken font-medium rounded-full hover:bg-[#3CA997] hover:text-white transition-colors"
                    >
                      Set as primary
                    </button>
                  )}
                  <button
                    onClick={() => removeImage((image as any).id)}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Primary Badge */}
                {(image as any).isPrimary && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-[#3CA997] text-white text-xs font-hanken font-medium rounded-full">
                    Primary Photo
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Info */}
      <p className="text-xs text-[#A8A2A2] font-hanken text-center">
        {images.length} / {maxFiles} photos uploaded
      </p>
    </div>
  );
}
