<?php
/**
 * Text used for 'Entities' (Document Structure Elements) such as
 * Books, Shelves, Chapters & Pages
 */
return [

    // Shared
    'recently_created' => 'Duela gutxi sortuak',
    'recently_created_pages' => 'Berriki sortutako Orrialdeak',
    'recently_updated_pages' => 'Berriki aldatutako Orrialdeak',
    'recently_created_chapters' => 'Berriki sortutako Kapituluak',
    'recently_created_books' => 'Berriki sortutako Liburuak',
    'recently_created_shelves' => 'Berriki sortutako Apalak',
    'recently_update' => 'Azken eguneraketak',
    'recently_viewed' => 'Oraintsu ikusiak',
    'recent_activity' => 'Duela gutxiko Jarduera',
    'create_now' => 'Sortu bat orain',
    'revisions' => 'Berrikuspenak',
    'meta_revision' => '#:revisionCount Berrikuspen',
    'meta_created' => 'Sortua :timeLength',
    'meta_created_name' => ':timeLength sortua. Erabiltzailea :user',
    'meta_updated' => 'Aldatua :timeLength',
    'meta_updated_name' => ':timeLength aldatuta. Erabiltzailea :user',
    'meta_owned_name' => ':user da jabea',
    'entity_select' => 'Aukeratutako entitatea',
    'images' => 'Irudiak',
    'my_recent_drafts' => 'Nire azken zirriborroak',
    'my_recently_viewed' => 'Nik Ikusitako azkenak',
    'my_most_viewed_favourites' => 'Nire gehien ikusitako gogokoak',
    'my_favourites' => 'Nire Gogokoenak',
    'no_pages_viewed' => 'You have not viewed any pages',
    'no_pages_recently_created' => 'Ez da orrialderik sortu azkenaldian',
    'no_pages_recently_updated' => 'Ez da orrialderik aldatu azkenaldian',
    'export' => 'Esportatu',
    'export_html' => 'Contained Web File',
    'export_pdf' => 'PDF fitxategia',
    'export_text' => 'Testu lauko fitxategiak',
    'export_md' => 'Markdown File',

    // Permissions and restrictions
    'permissions' => 'Baimenak',
    'permissions_intro' => 'Once enabled, These permissions will take priority over any set role permissions.',
    'permissions_enable' => 'Baimena pertsonalizatuak Gaitu',
    'permissions_save' => 'Gorde baimenak',
    'permissions_owner' => 'Jabea',

    // Search
    'search_results' => 'Bilaketaren emaitzak',
    'search_total_results_found' => ':count result found|:count total results found',
    'search_clear' => 'Bilaketa testua garbitu',
    'search_no_pages' => 'Ez da orririk aurkitu zure bilaketan',
    'search_for_term' => 'Search for :term',
    'search_more' => 'Emaitza gehiago',
    'search_advanced' => 'Bilaketa aurreratua',
    'search_terms' => 'Bilaketa-hitza',
    'search_content_type' => 'Eduki Mota',
    'search_exact_matches' => 'Bat etortze zehatza',
    'search_tags' => 'Tag Searches',
    'search_options' => 'Aukerak',
    'search_viewed_by_me' => 'Nik ikusiak',
    'search_not_viewed_by_me' => 'Nik ikusi ez ditudanak',
    'search_permissions_set' => 'Baimenak',
    'search_created_by_me' => 'Created by me',
    'search_updated_by_me' => 'Updated by me',
    'search_owned_by_me' => 'Owned by me',
    'search_date_options' => 'Date Options',
    'search_updated_before' => 'Updated before',
    'search_updated_after' => 'Updated after',
    'search_created_before' => 'Created before',
    'search_created_after' => 'Created after',
    'search_set_date' => 'Set Date',
    'search_update' => 'Update Search',

    // Shelves
    'shelf' => 'Shelf',
    'shelves' => 'Shelves',
    'x_shelves' => ':count Shelf|:count Shelves',
    'shelves_long' => 'Bookshelves',
    'shelves_empty' => 'No shelves have been created',
    'shelves_create' => 'Create New Shelf',
    'shelves_popular' => 'Popular Shelves',
    'shelves_new' => 'New Shelves',
    'shelves_new_action' => 'New Shelf',
    'shelves_popular_empty' => 'The most popular shelves will appear here.',
    'shelves_new_empty' => 'The most recently created shelves will appear here.',
    'shelves_save' => 'Save Shelf',
    'shelves_books' => 'Books on this shelf',
    'shelves_add_books' => 'Add books to this shelf',
    'shelves_drag_books' => 'Drag books here to add them to this shelf',
    'shelves_empty_contents' => 'This shelf has no books assigned to it',
    'shelves_edit_and_assign' => 'Edit shelf to assign books',
    'shelves_edit_named' => 'Edit Bookshelf :name',
    'shelves_edit' => 'Edit Bookshelf',
    'shelves_delete' => 'Delete Bookshelf',
    'shelves_delete_named' => 'Delete Bookshelf :name',
    'shelves_delete_explain' => "This will delete the bookshelf with the name ':name'. Contained books will not be deleted.",
    'shelves_delete_confirmation' => 'Are you sure you want to delete this bookshelf?',
    'shelves_permissions' => 'Bookshelf Permissions',
    'shelves_permissions_updated' => 'Bookshelf Permissions Updated',
    'shelves_permissions_active' => 'Bookshelf Permissions Active',
    'shelves_permissions_cascade_warning' => 'Permissions on bookshelves do not automatically cascade to contained books. This is because a book can exist on multiple shelves. Permissions can however be copied down to child books using the option found below.',
    'shelves_copy_permissions_to_books' => 'Copy Permissions to Books',
    'shelves_copy_permissions' => 'Copy Permissions',
    'shelves_copy_permissions_explain' => 'This will apply the current permission settings of this bookshelf to all books contained within. Before activating, ensure any changes to the permissions of this bookshelf have been saved.',
    'shelves_copy_permission_success' => 'Bookshelf permissions copied to :count books',

    // Books
    'book' => 'Book',
    'books' => 'Books',
    'x_books' => ':count Book|:count Books',
    'books_empty' => 'Ez da orrialderik sortu',
    'books_popular' => 'Popular Books',
    'books_recent' => 'Azken liburuak',
    'books_new' => 'Liburu berriak',
    'books_new_action' => 'Liburu berria',
    'books_popular_empty' => 'The most popular books will appear here.',
    'books_new_empty' => 'The most recently created books will appear here.',
    'books_create' => 'Liburu berria sortu',
    'books_delete' => 'Liburua ezabatu',
    'books_delete_named' => 'Delete Book :bookName',
    'books_delete_explain' => 'This will delete the book with the name \':bookName\'. All pages and chapters will be removed.',
    'books_delete_confirmation' => 'Ziur zaude liburu hau ezabatu nahi duzula?',
    'books_edit' => 'Editatu liburua',
    'books_edit_named' => 'Edit Book :bookName',
    'books_form_book_name' => 'Liburu izena',
    'books_save' => 'Save Book',
    'books_permissions' => 'Book Permissions',
    'books_permissions_updated' => 'Book Permissions Updated',
    'books_empty_contents' => 'No pages or chapters have been created for this book.',
    'books_empty_create_page' => 'Create a new page',
    'books_empty_sort_current_book' => 'Sort the current book',
    'books_empty_add_chapter' => 'Kapitulu berria gehitu',
    'books_permissions_active' => 'Book Permissions Active',
    'books_search_this' => 'Bilatu liburu hau',
    'books_navigation' => 'Book Navigation',
    'books_sort' => 'Sort Book Contents',
    'books_sort_named' => 'Sort Book :bookName',
    'books_sort_name' => 'Ordenatu izenaren arabera',
    'books_sort_created' => 'Ordenatu argitaratze-dataren arabera',
    'books_sort_updated' => 'Sort by Updated Date',
    'books_sort_chapters_first' => 'Chapters First',
    'books_sort_chapters_last' => 'Chapters Last',
    'books_sort_show_other' => 'Show Other Books',
    'books_sort_save' => 'Save New Order',
    'books_copy' => 'Copy Book',
    'books_copy_success' => 'Book successfully copied',

    // Chapters
    'chapter' => 'Kapitulua',
    'chapters' => 'Kapituluak',
    'x_chapters' => ':count Chapter|:count Chapters',
    'chapters_popular' => 'Popular Chapters',
    'chapters_new' => 'New Chapter',
    'chapters_create' => 'Create New Chapter',
    'chapters_delete' => 'Kapitulua ezabatu',
    'chapters_delete_named' => 'Delete Chapter :chapterName',
    'chapters_delete_explain' => 'This will delete the chapter with the name \':chapterName\'. All pages that exist within this chapter will also be deleted.',
    'chapters_delete_confirm' => 'Ziur kapitulu hau ezabatu nahi duzula?',
    'chapters_edit' => 'Kapitulua aldatu',
    'chapters_edit_named' => 'Edit Chapter :chapterName',
    'chapters_save' => 'Kapitulua gorde',
    'chapters_move' => 'Move Chapter',
    'chapters_move_named' => 'Move Chapter :chapterName',
    'chapter_move_success' => 'Chapter moved to :bookName',
    'chapters_copy' => 'Copy Chapter',
    'chapters_copy_success' => 'Chapter successfully copied',
    'chapters_permissions' => 'Chapter Permissions',
    'chapters_empty' => 'No pages are currently in this chapter.',
    'chapters_permissions_active' => 'Chapter Permissions Active',
    'chapters_permissions_success' => 'Chapter Permissions Updated',
    'chapters_search_this' => 'Search this chapter',

    // Pages
    'page' => 'Page',
    'pages' => 'Pages',
    'x_pages' => ':count Page|:count Pages',
    'pages_popular' => 'Popular Pages',
    'pages_new' => 'New Page',
    'pages_attachments' => 'Attachments',
    'pages_navigation' => 'Page Navigation',
    'pages_delete' => 'Delete Page',
    'pages_delete_named' => 'Delete Page :pageName',
    'pages_delete_draft_named' => 'Delete Draft Page :pageName',
    'pages_delete_draft' => 'Delete Draft Page',
    'pages_delete_success' => 'Page deleted',
    'pages_delete_draft_success' => 'Draft page deleted',
    'pages_delete_confirm' => 'Are you sure you want to delete this page?',
    'pages_delete_draft_confirm' => 'Are you sure you want to delete this draft page?',
    'pages_editing_named' => 'Editing Page :pageName',
    'pages_edit_draft_options' => 'Draft Options',
    'pages_edit_save_draft' => 'Save Draft',
    'pages_edit_draft' => 'Edit Page Draft',
    'pages_editing_draft' => 'Editing Draft',
    'pages_editing_page' => 'Editing Page',
    'pages_edit_draft_save_at' => 'Draft saved at ',
    'pages_edit_delete_draft' => 'Delete Draft',
    'pages_edit_discard_draft' => 'Discard Draft',
    'pages_edit_set_changelog' => 'Set Changelog',
    'pages_edit_enter_changelog_desc' => 'Enter a brief description of the changes you\'ve made',
    'pages_edit_enter_changelog' => 'Enter Changelog',
    'pages_save' => 'Save Page',
    'pages_title' => 'Page Title',
    'pages_name' => 'Page Name',
    'pages_md_editor' => 'Editor',
    'pages_md_preview' => 'Preview',
    'pages_md_insert_image' => 'Insert Image',
    'pages_md_insert_link' => 'Insert Entity Link',
    'pages_md_insert_drawing' => 'Insert Drawing',
    'pages_not_in_chapter' => 'Page is not in a chapter',
    'pages_move' => 'Move Page',
    'pages_move_success' => 'Page moved to ":parentName"',
    'pages_copy' => 'Copy Page',
    'pages_copy_desination' => 'Copy Destination',
    'pages_copy_success' => 'Page successfully copied',
    'pages_permissions' => 'Page Permissions',
    'pages_permissions_success' => 'Page permissions updated',
    'pages_revision' => 'Revision',
    'pages_revisions' => 'Page Revisions',
    'pages_revisions_named' => 'Page Revisions for :pageName',
    'pages_revision_named' => 'Page Revision for :pageName',
    'pages_revision_restored_from' => 'Restored from #:id; :summary',
    'pages_revisions_created_by' => 'Created By',
    'pages_revisions_date' => 'Revision Date',
    'pages_revisions_number' => '#',
    'pages_revisions_numbered' => 'Revision #:id',
    'pages_revisions_numbered_changes' => 'Revision #:id Changes',
    'pages_revisions_changelog' => 'Changelog',
    'pages_revisions_changes' => 'Changes',
    'pages_revisions_current' => 'Current Version',
    'pages_revisions_preview' => 'Preview',
    'pages_revisions_restore' => 'Restore',
    'pages_revisions_none' => 'This page has no revisions',
    'pages_copy_link' => 'Copy Link',
    'pages_edit_content_link' => 'Edit Content',
    'pages_permissions_active' => 'Page Permissions Active',
    'pages_initial_revision' => 'Initial publish',
    'pages_initial_name' => 'New Page',
    'pages_editing_draft_notification' => 'You are currently editing a draft that was last saved :timeDiff.',
    'pages_draft_edited_notification' => 'This page has been updated by since that time. It is recommended that you discard this draft.',
    'pages_draft_page_changed_since_creation' => 'This page has been updated since this draft was created. It is recommended that you discard this draft or take care not to overwrite any page changes.',
    'pages_draft_edit_active' => [
        'start_a' => ':count users have started editing this page',
        'start_b' => ':userName has started editing this page',
        'time_a' => 'since the page was last updated',
        'time_b' => 'in the last :minCount minutes',
        'message' => ':start :time. Take care not to overwrite each other\'s updates!',
    ],
    'pages_draft_discarded' => 'Draft discarded, The editor has been updated with the current page content',
    'pages_specific' => 'Specific Page',
    'pages_is_template' => 'Page Template',

    // Editor Sidebar
    'page_tags' => 'Page Tags',
    'chapter_tags' => 'Chapter Tags',
    'book_tags' => 'Book Tags',
    'shelf_tags' => 'Shelf Tags',
    'tag' => 'Tag',
    'tags' =>  'Tags',
    'tag_name' =>  'Tag Name',
    'tag_value' => 'Tag Value (Optional)',
    'tags_explain' => "Add some tags to better categorise your content. \n You can assign a value to a tag for more in-depth organisation.",
    'tags_add' => 'Add another tag',
    'tags_remove' => 'Remove this tag',
    'tags_usages' => 'Total tag usages',
    'tags_assigned_pages' => 'Assigned to Pages',
    'tags_assigned_chapters' => 'Assigned to Chapters',
    'tags_assigned_books' => 'Assigned to Books',
    'tags_assigned_shelves' => 'Assigned to Shelves',
    'tags_x_unique_values' => ':count unique values',
    'tags_all_values' => 'All values',
    'tags_view_tags' => 'View Tags',
    'tags_view_existing_tags' => 'View existing tags',
    'tags_list_empty_hint' => 'Tags can be assigned via the page editor sidebar or while editing the details of a book, chapter or shelf.',
    'attachments' => 'Attachments',
    'attachments_explain' => 'Upload some files or attach some links to display on your page. These are visible in the page sidebar.',
    'attachments_explain_instant_save' => 'Changes here are saved instantly.',
    'attachments_items' => 'Attached Items',
    'attachments_upload' => 'Upload File',
    'attachments_link' => 'Attach Link',
    'attachments_set_link' => 'Set Link',
    'attachments_delete' => 'Are you sure you want to delete this attachment?',
    'attachments_dropzone' => 'Drop files or click here to attach a file',
    'attachments_no_files' => 'No files have been uploaded',
    'attachments_explain_link' => 'You can attach a link if you\'d prefer not to upload a file. This can be a link to another page or a link to a file in the cloud.',
    'attachments_link_name' => 'Link Name',
    'attachment_link' => 'Attachment link',
    'attachments_link_url' => 'Link to file',
    'attachments_link_url_hint' => 'Url of site or file',
    'attach' => 'Attach',
    'attachments_insert_link' => 'Add Attachment Link to Page',
    'attachments_edit_file' => 'Edit File',
    'attachments_edit_file_name' => 'File Name',
    'attachments_edit_drop_upload' => 'Drop files or click here to upload and overwrite',
    'attachments_order_updated' => 'Attachment order updated',
    'attachments_updated_success' => 'Attachment details updated',
    'attachments_deleted' => 'Attachment deleted',
    'attachments_file_uploaded' => 'File successfully uploaded',
    'attachments_file_updated' => 'File successfully updated',
    'attachments_link_attached' => 'Link successfully attached to page',
    'templates' => 'Templates',
    'templates_set_as_template' => 'Page is a template',
    'templates_explain_set_as_template' => 'You can set this page as a template so its contents be utilized when creating other pages. Other users will be able to use this template if they have view permissions for this page.',
    'templates_replace_content' => 'Replace page content',
    'templates_append_content' => 'Append to page content',
    'templates_prepend_content' => 'Prepend to page content',

    // Profile View
    'profile_user_for_x' => 'User for :time',
    'profile_created_content' => 'Created Content',
    'profile_not_created_pages' => ':userName has not created any pages',
    'profile_not_created_chapters' => ':userName has not created any chapters',
    'profile_not_created_books' => ':userName has not created any books',
    'profile_not_created_shelves' => ':userName has not created any shelves',

    // Comments
    'comment' => 'Comment',
    'comments' => 'Comments',
    'comment_add' => 'Add Comment',
    'comment_placeholder' => 'Leave a comment here',
    'comment_count' => '{0} No Comments|{1} 1 Comment|[2,*] :count Comments',
    'comment_save' => 'Save Comment',
    'comment_saving' => 'Saving comment...',
    'comment_deleting' => 'Deleting comment...',
    'comment_new' => 'New Comment',
    'comment_created' => 'commented :createDiff',
    'comment_updated' => 'Updated :updateDiff by :username',
    'comment_deleted_success' => 'Comment deleted',
    'comment_created_success' => 'Comment added',
    'comment_updated_success' => 'Comment updated',
    'comment_delete_confirm' => 'Are you sure you want to delete this comment?',
    'comment_in_reply_to' => 'In reply to :commentId',

    //Annotation
    'annotation'=>'Annotation',
    // Revision
    'revision_delete_confirm' => 'Are you sure you want to delete this revision?',
    'revision_restore_confirm' => 'Are you sure you want to restore this revision? The current page contents will be replaced.',
    'revision_delete_success' => 'Revision deleted',
    'revision_cannot_delete_latest' => 'Cannot delete the latest revision.',

    // Copy view
    'copy_consider' => 'Please consider the below when copying content.',
    'copy_consider_permissions' => 'Custom permission settings will not be copied.',
    'copy_consider_owner' => 'You will become the owner of all copied content.',
    'copy_consider_images' => 'Page image files will not be duplicated & the original images will retain their relation to the page they were originally uploaded to.',
    'copy_consider_attachments' => 'Page attachments will not be copied.',
    'copy_consider_access' => 'A change of location, owner or permissions may result in this content being accessible to those previously without access.',
];
