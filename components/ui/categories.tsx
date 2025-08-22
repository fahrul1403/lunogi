import Image from 'next/image';

const categories = [
  { image: '/icons/electronic-device.png', title: 'Electronics' },
  { image: '/icons/software-development.png', title: 'Software' },
  { image: '/icons/open-book.png', title: 'Books' },
  { image: '/icons/mona-lisa.png', title: 'Arts' },
  { image: '/icons/jewelry.png', title: 'Jewelry' },
  { image: '/icons/rocking-horse.png', title: 'Sports' },
  { image: '/icons/puzzle.png', title: 'Hobbies' },
  { image: '/icons/game-controller.png', title: 'Games' },
  { image: '/icons/sport.png', title: 'Sports' },
  { image: '/icons/watch.png', title: 'Watch' },
  { image: '/icons/living-room.png', title: 'Furniture' },
];

const Categories = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold mb-8">Our Top Categories</h2>
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <div key={index} className="m-4">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:-translate-y-2 hover:shadow-lg">
              <Image 
                src={category.image}
                alt={category.title}
                width={64} // Adjust width and height according to your design
                height={64}
                className="mx-auto mb-4"
              />
              <div className="text-lg font-semibold">{category.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
