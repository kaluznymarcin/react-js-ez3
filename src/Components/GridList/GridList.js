import './gridlist.css';

const GridList = ({ children, bgColor }) => (
  <div class="grid-list" style={{ backgroundColor: bgColor }}>
    {children}
  </div>
);

export default GridList;
