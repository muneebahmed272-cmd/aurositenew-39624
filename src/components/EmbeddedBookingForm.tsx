import { useEffect } from "react";

const EmbeddedBookingForm = () => {
  useEffect(() => {
    // Load the GoHighLevel form embed script
    const script = document.createElement("script");
    script.src = "https://api.3starstudios.co.uk/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://api.3starstudios.co.uk/js/form_embed.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <iframe
        src="https://api.3starstudios.co.uk/widget/form/ecSWyteALvoTjCvd2wRT"
        style={{
          width: "100%",
          height: "866px",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-ecSWyteALvoTjCvd2wRT"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Aurosite Booking Form 1"
        data-height="866"
        data-layout-iframe-id="inline-ecSWyteALvoTjCvd2wRT"
        data-form-id="ecSWyteALvoTjCvd2wRT"
        title="Aurosite Booking Form 1"
      />
    </div>
  );
};

export default EmbeddedBookingForm;
