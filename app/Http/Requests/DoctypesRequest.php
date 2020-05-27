<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DoctypesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'name' => 'required|min:3|max:150',
            'tipo' => 'required',
            'obligatorio' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Requerido.',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 150 caracteres.',

            'tipo.required' => 'Requerido.',

            'obligatorio.required' => 'Requerido.',
        ];
    }
}
