const Hero = () => {
  return (
    <section style={{
      textAlign: "center",
      padding: "60px 20px"
    }}>
      
      {/* Main heading */}
      <h1 style={{
        fontSize: "40px",
        fontWeight: "bold"
      }}>
        The Safest Way to Shop for Groceries
      </h1>

      {/* Small description */}
      <p style={{
        marginTop: "20px",
        color: "gray"
      }}>
        Scan products and know what you are eating.
      </p>

      {/* Buttons section */}
      <div style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        gap: "20px"
      }}>
        
        {/* Download button */}
        <button style={{
          padding: "12px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "25px"
        }}>
          Download App
        </button>

        {/* Community button */}
        <button style={{
          padding: "12px 20px",
          borderRadius: "25px",
          border: "1px solid black",
          background: "white"
        }}>
          Join Community
        </button>

      </div>

    </section>
  )
}

export default Hero
