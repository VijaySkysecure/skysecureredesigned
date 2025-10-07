import React from 'react';

type Dimension = number | string;

type ImagePlaceholderProps = {
  label: string;
  imageName?: string;
  width?: Dimension;
  height?: Dimension;
  shape?: 'rect' | 'circle';
  borderRadius?: number | string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  imageName,
  width = '100%',
  height = '100%',
  shape = 'rect',
  borderRadius,
  className = '',
}: ImagePlaceholderProps): React.ReactElement {
  const radius = shape === 'circle' ? '999px' : borderRadius ?? '12px';
  const combinedClass = `image-placeholder${imageName ? ' image-placeholder--loaded' : ''} ${className}`.trim();

  return (
    <div
      className={combinedClass}
      style={{
        width,
        height,
        borderRadius: radius,
      }}
      {...(!imageName ? { role: 'img', 'aria-label': `${label} placeholder` } : {})}
    >
      {imageName ? (
        <img
          src={`/assets/img/${imageName}`}
          alt={label}
          className="image-placeholder__img"
        />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
