<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AnnotationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('annotations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('page_revision_id')->indexed();
            $table->integer('created_by')->indexed();
            $table->integer('updated_by')->indexed();
            $table->string('text');
            $table->string('hash');
            $table->string('quote');
            $table->json('image');
            $table->json('ranges');;
            $table->nullableTimestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('annotations');
    }
}
