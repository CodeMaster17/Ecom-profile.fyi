import CategoryGalleryItem from "./CategoryGalleryItem";

const CategoryContent: React.FC = () => {
    return (
        <div className="flex flex-wrap -m-4">
            <CategoryGalleryItem
                imgSrc="https://dummyimage.com/720x400"
                subtitle="SUBTITLE"
                title="Chichen Itza"
                description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
            />
            <CategoryGalleryItem
                imgSrc="https://dummyimage.com/721x401"
                subtitle="SUBTITLE"
                title="Colosseum Roma"
                description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
            />
            <CategoryGalleryItem
                imgSrc="https://dummyimage.com/722x402"
                subtitle="SUBTITLE"
                title="Great Pyramid of Giza"
                description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
            />
            <CategoryGalleryItem
                imgSrc="https://dummyimage.com/723x403"
                subtitle="SUBTITLE"
                title="San Francisco"
                description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
            />
        </div>
    );
};

export default CategoryContent;