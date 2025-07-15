export default function AboutPage() {
  return (
    <main className="about-container">
      <h2 className="about-heading">About Us</h2>

      <p className="about-text">
        Welcome to <strong>MyBlog Admin Panel</strong> — your intuitive dashboard for managing blog content efficiently.
      </p>

      <h3 className="about-subheading">🧠 Our Mission</h3>
      <p className="about-text">
        We aim to provide a fast, secure, and user-friendly interface for bloggers and administrators
        to create, edit, and manage quality content — all without technical hassle.
      </p>

      <h3 className="about-subheading">🚀 Features</h3>
      <ul className="about-list">
        <li>Create and update blog posts with title, description, and image</li>
        <li>Delete outdated content in one click</li>
        <li>Store and retrieve data using browser localStorage</li>
        <li>Admin-friendly controls for blog management</li>
      </ul>

      <h3 className="about-subheading">🤝 Built For</h3>
      <p className="about-text">
        Students, content creators, and developers who want to manage blogs easily without a complex backend setup.
      </p>
    </main>
  );
}
