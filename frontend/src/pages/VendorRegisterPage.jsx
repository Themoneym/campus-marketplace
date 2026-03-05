export default function VendorRegisterPage() {
  return (
    <section className="stack">
      <h2>Vendor Registration</h2>
      <form className="card grid two">
        <label>Store Name<input placeholder="Campus Gadgets GH" /></label>
        <label>Email<input type="email" placeholder="vendor@example.com" /></label>
        <label>Description<textarea placeholder="What do you sell or offer?" /></label>
        <label>Address in Ghana<input placeholder="East Legon, Accra" /></label>
        <label>GPS Coordinates<input placeholder="5.6037,-0.1870" /></label>
        <label>Upload Store Images<input type="file" /></label>
        <button type="button">Submit for Admin Verification</button>
      </form>
    </section>
  );
}
