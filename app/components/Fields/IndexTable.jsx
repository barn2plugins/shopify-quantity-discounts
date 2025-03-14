export default function IndexTable({ headings, children }) {
  return (
    <table className="barn2-index-table">
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