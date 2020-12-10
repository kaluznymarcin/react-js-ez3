import './gridlist.css';

const GridList = ({ children, bgColor, data }) => (
  <div className="grid-list" style={{ backgroundColor: bgColor }}>
    {children}
  </div>
);

export default GridList;
