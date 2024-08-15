import CategoryContent from "./CategoryContent";
import CategoryHeader from "./CategoryHeader";


const CategorySection: React.FC = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <CategoryHeader />
                <CategoryContent />
                {/* <Cate /> */}
            </div>
        </section>
    );
};

export default CategorySection;