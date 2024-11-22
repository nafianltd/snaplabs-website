'use client';

import { useState } from 'react';
import Footer from './Footer';
import MapModal from './MapModal';

export default function FooterWithMap() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <Footer onOpenMap={() => setIsMapOpen(true)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
}
