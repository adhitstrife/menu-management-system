<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        // Get all menus with their children
        $menus = Menu::with('children')->whereNull('parent_id')->get();
        return response()->json($menus);
    }

    public function show($id)
    {
        $menu = Menu::where('id', $id)
            ->with('childrens')
            ->first();
        return response()->json($menu);
    }

    public function store(Request $request)
    {
        $parent = Menu::find($request->parent_id);

        if ($request->parent_name !== '' && $request->parent_name !== $parent->name) {
            $parent->update([
                'name' => $request->parent_name
            ]);
        }

        $menu = null;
        if ($request->name !== null) {
            $menu = new Menu();
            $menu->name = $request->name;
            $menu->parent_id = $parent ? $parent->id : null;
            $menu->depth = $parent ? $parent->depth + 1 : 0;
            $menu->save();
        }

        return response()->json($menu ? $menu : $parent, 201);
    }

    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        $menu->name = $request->name;
        $menu->save();

        return response()->json($menu);
    }

    public function destroy($id)
    {
        Menu::destroy($id);
        return response()->json(null, 204);
    }
}
