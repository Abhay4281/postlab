import "./FloatingGrid.css"; 

const FloatingGrid = () => {
    return (
        <div className="floating-grid">
            <div className="floating-grid-col first"></div>
            <div className="floating-grid-col"></div>
            <div className="floating-grid-col"></div>
            <div className="floating-grid-col last"></div>
        </div>
    );
};

export default FloatingGrid;
