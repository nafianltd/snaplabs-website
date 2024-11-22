interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative flex items-start justify-center pt-[15vh] p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-[650px] w-full mx-auto">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 bg-white text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors shadow-lg z-10"
          >
            ×
          </button>
          <div className="p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.2681814256875!2d-2.5911006999999997!3d51.4532324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f8b441aea43%3A0x3bcc0d4b969563fd!2sSnap%20Analytics!5e0!3m2!1sen!2suk!4v1732317255855!5m2!1sen!2suk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
