import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import DeleteButton from '@/Shared/DeleteButton';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import TrashedMessage from '@/Shared/TrashedMessage';
import Icon from '@/Shared/Icon';

const Edit = () => {
    const { book, authors } = usePage().props;
    const { data, setData, errors, put, processing } = useForm({
        name: book.name || '',
        isbn: book.isbn || '',
        author_id: book.author_id || ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('books.update', book.id));
    }

    function destroy() {
        if (confirm('Are you sure you want to delete this book?')) {
            Inertia.delete(route('books.destroy', book.id));
        }
    }

    return (
        <div>
            <Helmet title={data.name} />
            <h1 className="mb-8 text-3xl font-bold">
                <InertiaLink
                    href={route('books.index')}
                    className="text-indigo-600 hover:text-indigo-700"
                >
                    Books
                </InertiaLink>
                <span className="mx-2 font-medium text-indigo-600">/</span>
                {data.name}
            </h1>
            {book.deleted_at && (
                <TrashedMessage>
                    This book has been deleted.
                </TrashedMessage>
            )}
            <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Name"
                            name="name"
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
                    <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
                        {!book.deleted_at && (
                            <DeleteButton onDelete={destroy}>
                                Delete Book
                            </DeleteButton>
                        )}
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="ml-auto btn-indigo"
                        >
                            Update Book
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = page => <Layout children={page} />;

export default Edit;
