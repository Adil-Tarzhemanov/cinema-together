export function Home() {
  return (
    <div className='pt-4'>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {Array(500)
          .fill(null)
          .map((_, index) => (
            <h2 key={index}>bubble tea</h2>
          ))}
      </div>
    </div>
  )
}

export default Home