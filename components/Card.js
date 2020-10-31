export const Card = ({ name, category }) => (
    <div className="max-w-sm flex p-6 bg-white rounded-lg shadow-md m-2">
        <div className="ml-6 pt-1">
            <h2 className="text-xl text-gray-900 leading-tight">{name}</h2>
            <p className="text-base text-gray-600 leading-normal">
                {`Category: ${category}`}
            </p>
            <div class="mt-4">
                <button className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
                    See more
                </button>
            </div>
        </div>
    </div>
);
