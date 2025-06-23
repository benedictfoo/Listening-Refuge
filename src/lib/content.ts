import {type CollectionEntry, getCollection} from 'astro:content';

let cachedPosts: CollectionEntry<'blog'>[] | null = null;

export async function getBlogPosts() {
    if (!cachedPosts) {
        cachedPosts = await getCollection('blog');
    }
    return cachedPosts;
}