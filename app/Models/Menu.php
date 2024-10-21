<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasUuids;

    protected $fillable = [
        'name',
        'parent_id',
        'depth'
    ];

    // Define the relationship to get the child menus
    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id');
    }

    // Define the relationship to get the parent menu
    public function parent()
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    public function childrens()
    {
        return $this->children()->with('childrens');
    }
}
