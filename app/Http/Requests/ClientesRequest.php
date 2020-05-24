<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientesRequest extends FormRequest
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
        $id = $this->request->get('id') ? ',' . $this->request->get('id') : '';

        return [
            'rs' => 'required|min:3|max:150',
            'cuil' => 'required|min:11|max:11|unique:clientes,cuil'.$id,
            'domicilio' => 'min:5|max:30',
            'telefono' => 'min:5|max:30',
        ];
    }

    public function messages()
    {
        return [
            'rs.required' => 'Requerido.',
            'rs.min' => 'El minimo es 3 caracteres.',
            'rs.max' => 'El maximo es 150 caracteres.',

            'cuil.required' => 'Requerido.',
            'cuil.unique' => 'Ya existe. ',
            'cuil.min' => 'El minimo es 11 digitos.',
            'cuil.max' => 'El maximo es 11 digitos.',
            
            'domicilio.min' => 'El minimo es 5 digitos.',
            'domicilio.max' => 'El maximo es 30 digitos.',
            
            'telefono.min' => 'El minimo es 5 digitos.',
            'telefono.max' => 'El maximo es 30 digitos.'
        ];
    }
}
