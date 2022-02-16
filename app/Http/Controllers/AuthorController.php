<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthorRequest;
use App\Models\Author;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $authors = Author::latest()->paginate();

        return Inertia::render('Authors/Index', ['authors' => $authors]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Authors/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAuthorRequest $request)
    {
        Author::create(
            $request->validated()
        );

        return Redirect::route('authors.index')->with('success', 'Author created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function show(Author $author)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function edit(Author $author)
    {
        return Inertia::render('Authors/Edit', [
            'author' => [
                'id' => $author->id,
                'full_name' => $author->full_name,
                'city' => $author->city ? $author->city : null,
                'country' => $author->country ? $author->country : null,
                'website' => $author->website ? $author->website : null,
                'books' => $author->books()->get()->map->only('id', 'name', 'isbn', 'deleted_at'),
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function update(StoreAuthorRequest $request, Author $author)
    {
        $author->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'Author updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function destroy(Author $author)
    { 
        if (Book::where('author_id', $author->id)->exists()) {

            return Redirect::back()->with('error', 'You cannot delete an author attached to a book!');

        } else {

            $author->delete();

            return Redirect::route('authors.index')->with('success', 'Author deleted successfully.');
        }
    }
}
