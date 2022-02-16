import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';

const Create = () => {
    const { authors } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        name: '',
        isbn: '',
        author_id: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('books.store'));
    }

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">
                <InertiaLink
                    href={route('books.index')}
                    className="text-indigo-600 hover:text-indigo-700"
                >
                    Books
                </InertiaLink>
                <span className="font-medium text-indigo-600"> /</span> Create
            </h1>
            <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Name"
                            name="name"
                            type="text"
                            errors={errors.name}
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="ISBN"
                            name="isbn"
                            type="text"
                            errors={errors.isbn}
                            value={data.isbn}
                            onChange={e => setData('isbn', e.target.value)}
                        />
                        <SelectInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Author"
                            name="author_id"
                            errors={errors.author_id}
                            value={data.author_id}
                            onChange={e => setData('author_id', e.target.value)}
                        >
                            <option value=""></option>
                            {authors.map(({ id, full_name }) => (
                                <option key={id} value={id}>
                                    {full_name}
                                </option>
                            ))}
                        </SelectInput>
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create Book
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = page => <Layout title="Create Book" children={page} />;

export default Create;
