import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
      </header>

      <main className={styles.content}>
        <div className={styles.contactGrid}>
          <section className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>Have questions about West Interface? We're here to help! Choose the most convenient way to reach us.</p>
            
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <h3>Support</h3>
                <p>For technical issues and game-related questions</p>
                <a href="mailto:support@westinterface.com">support@westinterface.com</a>
              </div>

              <div className={styles.infoCard}>
                <h3>Business</h3>
                <p>For partnership and business inquiries</p>
                <a href="mailto:business@westinterface.com">business@westinterface.com</a>
              </div>

              <div className={styles.infoCard}>
                <h3>Press</h3>
                <p>For media and press inquiries</p>
                <a href="mailto:press@westinterface.com">press@westinterface.com</a>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h3>Follow Us</h3>
              <div className={styles.socialGrid}>
                <a href="#" className={styles.socialButton}>Discord</a>
                <a href="#" className={styles.socialButton}>Twitter</a>
                <a href="#" className={styles.socialButton}>Facebook</a>
                <a href="#" className={styles.socialButton}>Instagram</a>
              </div>
            </div>
          </section>

          <section className={styles.contactForm}>
            <h2>Send a Message</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a topic</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Game Feedback</option>
                  <option value="bug">Bug Report</option>
                  <option value="business">Business Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </section>
        </div>

        <section className={styles.faq}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3>How do I report a bug?</h3>
              <p>Use our bug report form above or visit our support forum to report any issues you encounter.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>When will my ticket be answered?</h3>
              <p>We typically respond to support tickets within 24-48 hours during business days.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>Where can I find game updates?</h3>
              <p>Follow our social media channels or join our Discord server for the latest updates.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>How do I join the community?</h3>
              <p>Join our Discord server or follow us on social media to connect with other players.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 