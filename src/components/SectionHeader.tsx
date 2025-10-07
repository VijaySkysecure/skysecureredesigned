import React from 'react';

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  alignment?: 'left' | 'center';
};

export function SectionHeader({
  title,
  eyebrow,
  description,
  alignment = 'center',
}: SectionHeaderProps): React.ReactElement {
  return (
    <div className={`section-header section-header--${alignment}`}>
      {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-header__title">{title}</h2>
      {description ? (
        <p className="section-header__description">{description}</p>
      ) : null}
    </div>
  );
}
