import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class AlteraEditoraDTO{
    @IsString()
    @IsOptional()
    @ApiPropertyOptional(

    )
    nome: string;

}