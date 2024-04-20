export default function MapInfo() {
  return (
    <div className="flex justify-center pb-10 pt-0 md:pt-10 gap-2">
      <div className="aspect-video w-full overflow-hidden">
        <iframe
          title="kokohkoki-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4716.682255903369!2d106.58127039676752!3d-6.23190091683383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fdd2d322a809%3A0x91df224270c091eb!2sJl.%20Taman%20Ubud%20Asri%20III%20No.36%2C%20Binong%2C%20Kec.%20Curug%2C%20Kabupaten%20Tangerang%2C%20Banten%2015810!5e0!3m2!1sen!2sid!4v1705471906813!5m2!1sen!2sid"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
