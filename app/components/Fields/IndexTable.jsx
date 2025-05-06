export default function IndexTable({ headings, children, classes }) {
  return (
    <table className={classes}>
      <thead>
        <tr>
          {headings.map((header, index) => (
            <th 
              key={index} 
              style={{ textAlign: header.alignment || 'left' }}
            >
              {header.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}